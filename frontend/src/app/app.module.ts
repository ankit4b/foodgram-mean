import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { SearchComponent } from './components/shared/search/search.component';
import { TagsComponent } from './components/shared/tags/tags.component';
import { TitleComponent } from './components/shared/title/title.component';
import { FeatureComponent } from './components/shared/feature/feature.component';
import { FoodMenusComponent } from './components/shared/food-menus/food-menus.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LargeCardComponent } from './components/shared/large-card/large-card.component';
import { MenuCardComponent } from './components/shared/menu-card/menu-card.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LearnMoreComponent } from './components/shared/learn-more/learn-more.component';
import { FoodlistPageComponent } from './components/pages/foodlist-page/foodlist-page.component';

import { MatIconModule } from '@angular/material/icon';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodCardComponent } from './components/shared/food-card/food-card.component';
import { FooditemsComponent } from './components/shared/fooditems/fooditems.component';
import { LoginComponent } from './components/shared/login/login.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environments';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    FoodPageComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    TitleComponent,
    FeatureComponent,
    FoodMenusComponent,
    FooterComponent,
    LargeCardComponent,
    MenuCardComponent,
    NavbarComponent,
    TestimonialComponent,
    LearnMoreComponent,
    FoodlistPageComponent,
    FoodCardComponent,
    FooditemsComponent,
    LoginComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
