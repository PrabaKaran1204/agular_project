import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appFontupdate]',
  standalone: true
})
export class FontupdateDirective {

  constructor(change_font:ElementRef ) {
  // change_font.nativeElement.innerText="It is Inner Text";
  console.log(change_font);
  change_font.nativeElement.style.fontWeight="bold";
  change_font.nativeElement.style.color="red";
  change_font.nativeElement.style.textTransform = "lowercase"


}
}


// Why Use ElementRef?
// Direct Access to DOM: ElementRef allows you to access and manipulate the DOM directly. This can be useful when you need to perform operations that are not easily done through Angular's templating and binding mechanisms.

// DOM Manipulation: You can change properties like styles, attributes, classes, and even content of the element directly.

// Low-Level Control: It gives you more control over the DOM element, allowing for fine-grained manipulation when needed





// Why Use ElementRef Instead of CSS Classes?
// Dynamic Behavior: If you need to change styles dynamically based on user interactions, data, or component states, ElementRef can be more suitable. For example, changing styles based on a user’s input, or toggling styles on an event like a click.

// Complex Logic: When the styling depends on complex logic that cannot be easily expressed with CSS classes alone, using ElementRef gives you the flexibility to implement this logic in TypeScript.

// DOM Manipulation Beyond Styles: If your directive does more than just apply styles (e.g., adding event listeners, modifying attributes, or dynamically injecting other elements), then ElementRef becomes necessary.




// Conclusion
// Use ElementRef: When you need dynamic, context-specific, or complex changes to an element's styles or behaviors that can't be easily handled by CSS alone.

// Use CSS Classes: For general styling, where you want consistency, reusability, and maintainability across your application.