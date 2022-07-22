import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: Category[] = [];
  currentCategory:Category; // tsconfig.json dosyasında bu şekilde newlemeden kullanabilmek için strictPropertyInitialization özelliğini false yaptık.

  constructor(private catergoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.catergoryService.getCategories().subscribe(response =>{
      this.categories = response.data;
    })
    }
    setCurrentCategory(category:Category){
      this.currentCategory = category;
    }
    getCurrentCategoryClass(category:Category){
      if(category == this.currentCategory){
        return "list-group-item active"
      }
      else{
        return "list-group-item"
      }
    }
}
