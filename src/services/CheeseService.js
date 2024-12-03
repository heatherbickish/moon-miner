import { AppState } from "@/AppState.js"

class CheeseService {
  buyClick(name) {
    console.log('✅🧀')

  }
  mineCheese() {
    AppState.cheese++
  }

}
export const cheeseService = new CheeseService()