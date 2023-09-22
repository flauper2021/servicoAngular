import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from '../model/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL: string =""
  private pokeApi: string = "https://pokeapi.co/api/v2/pokemon/"
  private pokeData: PokemonData | any


  constructor(private http: HttpClient) {

    this.baseURL = this.pokeApi

  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    this.pokeData = this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
    console.log(this.pokeData)
    return this.pokeData
  }


}
