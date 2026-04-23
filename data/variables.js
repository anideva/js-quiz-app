const topics=[
    {
        id:"variables",
        title:"Variables",
        description:"var, let,const and scoping",
        questions:[
             {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: 1,
        explanation: "let is block-scoped and can be reassigned. var is function-scoped, const cannot be reassigned, and static is not a declaration keyword in JS."
      },
      {
        question: "What will happen if you try to reassign a const variable?",
        options: ["It silently does nothing", "It updates the value", "It throws a TypeError", "It creates a new variable"],
        answer: 2,
        explanation: "Reassigning a const throws a TypeError at runtime. const means the binding cannot be reassigned — though object properties can still be mutated."
      },
      {
        question: "Which keyword is function-scoped instead of block-scoped?",
        options: ["let", "const", "var", "def"],
        answer: 2,
        explanation: "var is function-scoped — it ignores blocks like if or for. let and const are block-scoped, meaning they only exist inside the {} they were declared in."
      },
      {
        question: "What is hoisting?",
        options: [
          "Moving code to a different file",
          "Declarations being moved to the top of their scope by the JS engine",
          "A way to import variables",
          "Converting var to let automatically"
        ],
        answer: 1,
        explanation: "Hoisting means JS moves declarations (not initializations) to the top of their scope before executing. var declarations are hoisted and initialized as undefined."
      },
      {
        question: "What does a var variable contain before it is initialized?",
        options: ["null", "0", "undefined", "ReferenceError"],
        answer: 2,
        explanation: "Due to hoisting, var is declared and initialized to undefined before the code runs. So accessing it before assignment gives undefined, not an error."
      },
      {
        question: "What happens when you access a let variable before its declaration?",
        options: ["Returns undefined", "Returns null", "Throws a ReferenceError", "Returns 0"],
        answer: 2,
        explanation: "let variables exist in a Temporal Dead Zone (TDZ) from the start of the block until the declaration. Accessing them in the TDZ throws a ReferenceError."
      },
      {
        question: "Which of these correctly declares multiple variables in one line?",
        options: [
          "let a, b, c;",
          "let a b c;",
          "let a; b; c;",
          "var(a, b, c);"
        ],
        answer: 0,
        explanation: "You can declare multiple variables in one statement by separating them with commas: let a, b, c; — this declares three separate variables."
      },
      {
        question: "Can a const variable holding an object have its properties changed?",
        options: [
          "No, const makes everything immutable",
          "Yes, object properties can still be changed",
          "Only if you use strict mode",
          "Only if the property is declared with let"
        ],
        answer: 1,
        explanation: "const only prevents reassigning the variable binding itself. The object it points to can still be mutated — you can add, change, or delete its properties."
      },
      {
        question: "What is the scope of a variable declared with let inside an if block?",
        options: [
          "Global scope",
          "Function scope",
          "Block scope — only inside the if",
          "Module scope"
        ],
        answer: 2,
        explanation: "let is block-scoped, so a variable declared inside an if block only exists within those curly braces. It cannot be accessed outside the block."
      },
      {
        question: "Which statement about var is true?",
        options: [
          "var is block-scoped",
          "var cannot be redeclared",
          "var can be redeclared in the same scope",
          "var throws an error if used without a value"
        ],
        answer: 2,
        explanation: "var allows redeclaration in the same scope without any error — which is one reason it can cause bugs. let and const both throw an error if you try to redeclare them."
      }
    ]
  }
];