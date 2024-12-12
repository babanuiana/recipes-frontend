export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      general: {
        recipes: "Recipes",
      },

      categories: {
        salads: "Salads",
        sauces: "Sauces",
        pasta: "Pasta",
        soups: "Soups",
        appetizers: "Appetizers",
        mexican: "Mexican",
        sushi: "Sushi",
        pizza: "Pizza",
      },

      auth: {
        loginToYourAccount: "Login to your account",
        welcomeMessage: "Welcome!",
        notRegisteredYet: "Not registered yet?",
        register: "Register",
        login: "Login",
        registration: "Registration",
        createAccount: "Create account",
        yourEmail: "Your Email",
        yourName: "Your Name",
        alreadyHaveAccount: "Already have an account?",
        emailRequired: "Email is required",
        emailInvalid: "Email is invalid",
        nameRequired: "Name is required",
        passwordRequired: "Password is required",
        passwordInvalid:
          "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters",
        wrongEmailOrPassword: "Wrong email or password",
        genericError:
          "Something went wrong. Make sure all fields are filled in correctly.",
      },
    },
    ru: {
      general: {
        recipes: "Рецепты",
      },

      categories: {
        salads: "Салаты",
        sauces: "Соусы",
        pasta: "Паста",
        soups: "Супы",
        appetizers: "Закуски",
        mexican: "Мексиканские",
        sushi: "Суши",
        pizza: "Пицца",
      },

      auth: {
        loginToYourAccount: "Войдите в ваш аккаунт",
        welcomeMessage: "Добро пожаловать!",
        notRegisteredYet: "Ещё не зарегистрированы?",
        register: "Зарегистрироваться",
        login: "Войти",
        registration: "Регистрация",
        createAccount: "Создайте аккаунт",
        yourEmail: "Ваш Email",
        yourName: "Ваше имя",
        alreadyHaveAccount: "Уже есть аккаунт?",
        emailRequired: "Email обязателен",
        emailInvalid: "Email неверный",
        nameRequired: "Имя обязательно",
        passwordRequired: "Пароль обязателен",
        passwordInvalid:
          "Пароль должен быть не менее 8 символов и включать заглавные буквы, строчные буквы, цифры и специальные символы",
        wrongEmailOrPassword: "Неверный email или пароль",
        genericError:
          "Что-то пошло не так. Убедитесь, что все поля заполнены правильно.",
      },
    },
  },
}));
