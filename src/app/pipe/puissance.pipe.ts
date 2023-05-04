import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "puissance",
})
export class PuissancePipe implements PipeTransform {
  transform(type: string): number {
    switch (type) {
      case "Feu":
        return 2;
      case "Plante":
        return 3;
      case "Eau":
        return 4;
      default:
        break;
    }
    return 0;
  }
}
