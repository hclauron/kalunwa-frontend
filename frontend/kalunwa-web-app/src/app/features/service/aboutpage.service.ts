import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutCampModel } from '../models/about-camp-model';
import { TotalDemographicsModel } from '../models/demographics-total-model';

@Injectable({
  providedIn: 'root'
})
export class AboutpageService {

  constructor(private http:HttpClient) { }


  public getDemographics(): Observable<TotalDemographicsModel>{
    return this.http.get<TotalDemographicsModel>('http://127.0.0.1:8000/api/about-us/demographics');
  }


  public getCampLeaders(): Observable<AboutCampModel[]>{
    return this.http.get<AboutCampModel[]>('http://127.0.0.1:8000/api/about-us/camps');
  }
}