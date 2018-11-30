import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor (private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://recipebook-9508e.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      params: new HttpParams().set('auth', token)
    });
  }


  getRecipes() {

    const token = this.authService.getToken();
    this.http.get<Recipe[]>('https://recipebook-9508e.firebaseio.com/recipes.json?auth=' + token).subscribe(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        this.recipeService.setRecipe(recipes);

      }
    );
  }
}
