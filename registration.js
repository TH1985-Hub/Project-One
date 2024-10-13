// function createRegistrationLayout(){
//     const container = UI.createElement(
//         "div",
//         {
//             class: "container-root"
//         },
//         [
//             UI.createElement('header', {class: "header"},
                
//                 UI.createElement("a", {href: "index.html"}, "Home" ),
//                 UI.createElement("a", {href: "home.html"}, "Log In" )
                
//             ),
//              UI.createElement('form', {class: "form-container"},
//                 [
//                     UI.createElement('input',{type:"text", name:"username",placeholder:"Username"}),
//                     UI.createElement('input',{type:"text", name: "password", placeholder: "Password"}),
//                     UI.createElement('input',{type:"text", name: "city"})
 
//                  ]
//                  ),

//                 ]
        
//                 );
//     UI.render(container,document.body);

// }

// createRegistrationLayout()

function createLoginLayout() {
    const container = UI.createElement('div', { class: "container-root" }, [
        UI.createElement('div', { class: "header" }, [
            UI.createElement('a', { href: "home.html" }, "Home"),
            UI.createElement('a', { href: "index.html" }, "Log In")
        ]),
        
        UI.createElement('div', { class: "form-container" }, [
            UI.createElement('div', { class: "login-container" }, [
                UI.createElement('form', {}, [
                    UI.createElement('input', { type: "text", placeholder: "Username", required: true }),
                    UI.createElement('input', { type: "password", placeholder: "Password", required: true }),
                    UI.createElement('select', { class: "city", name: "city", required: true }, [
                        UI.createElement('option', { value: "", disabled: true, selected: true }, "City"),
                        UI.createElement('option', { value: "vanadzor" }, "Vanadzor"),
                        UI.createElement('option', { value: "erevan" }, "Erevan"),
                        UI.createElement('option', { value: "gyumri" }, "Gyumri"),
                        UI.createElement('option', { value: "artashat" }, "Artashat"),
                        UI.createElement('option', { value: "dilijan" }, "Dilijan"),
                        UI.createElement('option', { value: "stepanavan" }, "Stepanavan"),
                        UI.createElement('option', { value: "goris" }, "Goris"),
                        UI.createElement('option', { value: "kapan" }, "Kapan")
                    ]),
                    UI.createElement('div', { class: "radio-group" }, [
                        UI.createElement('label', { class: "radio-inline" }, [
                            UI.createElement('input', { type: "radio", name: "gender", value: "male" }),
                            " Male"
                        ]),
                        UI.createElement('label', { class: "radio-inline" }, [
                            UI.createElement('input', { type: "radio", name: "gender", value: "female" }),
                            " Female"
                        ])
                    ]),
                    UI.createElement('div', { class: "checkbox-submit" }, [
                        UI.createElement('label', { for: "send-mail" }, [
                            UI.createElement('input', { type: "checkbox", class: "send-email", name: "email" }),
                            " Send me Email"
                        ]),
                        UI.createElement('input', { type: "submit", class: "submit-button", value: "Submit", required: true })
                    ])
                ])
            ])
        ])
    ]);

    UI.render(container, document.body); 
}

createLoginLayout();