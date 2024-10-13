// utils.js
// (element, attributes, children)
// const createElement = () => {
//     console.log('Utils -> createElement');
//   }
  
//   // (element, target)
//   const render = () => {
//     console.log('Utils -> render');
//   }
  
//   window.UI = {
//     createElement: createElement,
//     render: render
//   }

// const createElement = (tag, attributes, children) => {
//     // Create the element
//     const element = document.createElement(tag);
    
//     // Add attributes to the element
//     if (attributes) {
//       for (let key in attributes) {
//         element.setAttribute(key, attributes[key]);
//       }
//     }
  
//     // Add children or text to the element
//     if (children) {
//       if (Array.isArray(children)) {
//         // If children is an array, append each child
//         children.forEach(child => {
//           if (typeof child === "string") {
//             element.appendChild(document.createTextNode(child));
//           } else {
//             element.appendChild(child);
//           }
//         });
//       } else if (typeof children === "string") {
//         // If it's a string, set it as text content
//         element.textContent = children;
//       }
//     }
    
//     return element;
//   };
  
//   // (element, target)
//   const render = (element, target) => {
//     // Append the element to the target (e.g., document.body)
//     target.appendChild(element);
//   };
  
//   // Expose the functions in the UI object
//   window.UI = {
//     createElement: createElement,
//     render: render
//   };

const createElement = (element, attributes = {}, children = []) => {

    if (typeof element !== 'string' || !element) {
      throw new Error("Invalid element type. It must be a non-empty string.");
    }
  
  
    const newElement = document.createElement(element);
  
    
    if (attributes && typeof attributes === 'object') {
      Object.keys(attributes).forEach(attr => {
        newElement.setAttribute(attr, attributes[attr]);
      });
    }
  

    if (children) {
      if (Array.isArray(children)) {
        children.forEach(child => {
          if (typeof child === 'string') {
            newElement.appendChild(document.createTextNode(child)); 
          } else if (child instanceof HTMLElement) {
            newElement.appendChild(child); 
          } else {
            throw new Error("Invalid child type. It must be a string or a DOM element.");
          }
        });
      } else if (typeof children === 'string') {
        newElement.appendChild(document.createTextNode(children)); 
      } else if (children instanceof HTMLElement) {
        newElement.appendChild(children); 
      }
    }
  
    return newElement; 
  };
  
  
  const render = (element, target) => {
    
    if (!(element instanceof HTMLElement)) {
      throw new Error("Invalid element. It must be a DOM element.");
    }
    if (!(target instanceof HTMLElement)) {
      throw new Error("Invalid target. It must be a DOM element.");
    }
  
    
    target.appendChild(element);
  
    return target; 
  };
  
  
  window.UI = {
    createElement,
    render
  };