<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create and account
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            @submit.prevent="handleSubmitRegister"
          >
            <div>
              <label
                for="registerEmail"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                id="registerEmail"
                v-model="registerEmail"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="EmailName@1231.com"
              />
            </div>
            <div>
              <label
                for="registerUsername"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Register Username</label
              >
              <input
                type="text"
                id="registerUsername"
                v-model="registerUsername"
                placeholder="Register Username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="registerPassword"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Register Password</label
              >
              <input
                type="password"
                name="registerPassword"
                id="registerPassword"
                v-model="registerPassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="terms"
                  class="font-light text-gray-500 dark:text-gray-300"
                  >I accept the
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                    >Terms and Conditions</a
                  ></label
                >
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <a
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                @click="backToLogin"
                >Login here</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useUserData } from "../store/gerneral";
export default {
  data() {
    return {
      registerEmail: "",
      registerUsername: "",
      registerPassword: "",
    };
  },
  methods: {
    handleSubmitRegister() {
      const userDataStore = useUserData();
      const newUser = {
        userEmail: this.registerEmail,
        userUsername: this.registerUsername,
        userPassword: this.registerPassword,
      };
      userDataStore.addNewUser(newUser);
      this.registerEmail = "";
      this.registerUsername = "";
      this.registerPassword = "";
    },
    backToLogin() {
      this.$router.push("/");
    },
  },
};
</script>
