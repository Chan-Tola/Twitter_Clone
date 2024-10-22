<template>
  <div id="home" class="flex conainter h-screen w-full">
    <!-- left side -->
    <div
      class="lg:w-1/5 px-2 lg:px-6 py-2 border-r border-l-indigo-100 flex flex-col justify-between"
    >
      <div>
        <button class="h-12 w-12 text-5xl rounded-full mb-3 text-blue-400">
          <i class="fa-brands fa-twitter"></i>
        </button>
        <div>
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="id = tab.id"
            :class="`focus:outline-none hover:text-blue-400 flex items-center py-2 px-4 mb-3 hover:bg-blue-100 rounded-full mr-auto ${
              id === tab.id ? 'text-blue-400' : ''
            }`"
          >
            <i :class="`${tab.icon} text-2xl mr-4 text-left`"></i>
            <p class="text-lg font-semibold text-left hidden lg:block">
              {{ tab.title }}
            </p>
          </button>
        </div>
        <button
          class="text-white bg-blue-400 rounded-full focus:outline-none lg:w-full p-3 lg:h-auto h-12 w-12 hover:bg-blue-800 font-semibold"
        >
          <p class="hidden lg:block">Tweet</p>
          <i class="lg:hidden fa fa-plus"></i>
        </button>
      </div>

      <div class="lg:w-full relative">
        <button
          @click="dropdown = true"
          class="flex items-center w-full hover:bg-blue-100 p-3 rounded-full"
        >
          <img
            src="https://i.pinimg.com/736x/29/7d/d7/297dd70909baabb7be6dcce8863ad0a8.jpg"
            class="w-12 h-12 rounded-full"
          />
          <div v-if="currentUser" class="lg:block hidden ml-4">
            <p class="text-sm font-bold leading-tight">
              {{ currentUser.userUsername }}
            </p>
            <p class="text-sm leading-tight">{{ currentUser.userEmail }}</p>
          </div>
          <i class="fa-solid fa-angle-down ml-auto text-lg lg:block hidden"></i>
        </button>
        <!-- drop down -->
        <div
          v-if="dropdown === true"
          class="absolute bottom-0 left-0 w-64 rounded-lg border border-l-indigo-100 bg-white mb-[5rem]"
        >
          <button
            @click="dropdown = false"
            class="p-3 flex items-center w-full hover:bg-blue-100"
          >
            <img
              src="https://i.pinimg.com/736x/29/7d/d7/297dd70909baabb7be6dcce8863ad0a8.jpg"
              class="w-12 h-12 rounded-full"
            />
            <div v-if="currentUser" class="ml-4">
              <p class="text-sm font-bold leading-tight">
                {{ currentUser.userUsername }}
              </p>
              <p class="text-sm leading-tight">{{ currentUser.userEmail }}</p>
            </div>
            <i class="fa-solid fa-check ml-auto text-blue-400"></i>
          </button>
          <button
            @click="dropdown = false"
            class="w-full text-left hover:bg-indigo-100 border-t border-indigo-100 p-3 text-sm"
          >
            Add an existing account
          </button>
          <button
            @click="logout"
            class="w-full text-left hover:bg-indigo-100 border-t border-indigo-100 p-3 text-sm"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
    <!-- tweets -->
    <div class="w-1/2 h-full overflow-y-scroll">
      <div
        class="px-5 py-3 border-indigo-100 border-b flex items-center justify-between"
      >
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue-400"></i>
      </div>
      <div class="px-5 py-3 border-b-8 flex border-indigo-100">
        <div>
          <img
            class="w-12 h-12 rounded-full border border-indigo-100"
            src="https://i.pinimg.com/736x/29/7d/d7/297dd70909baabb7be6dcce8863ad0a8.jpg"
          />
        </div>
        <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
          <textarea
            v-model="tweeting.content"
            placeholder="What's up"
            class="w-full mt-3 pb-3 focus:outline-none resize-none"
          ></textarea>
          <div class="flex items-center">
            <i class="text-lg text-blue-400 mr-4 far fa-image"></i>
            <i class="text-lg text-blue-400 mr-4 fas fa-film"></i>
            <i class="text-lg text-blue-400 mr-4 far fa-chart-bar"></i>
            <i class="text-lg text-blue-400 mr-4 far fa-smile"></i>
          </div>
          <button
            type="submit"
            class="h-10 px-4 text-white font-semibold bg-blue-400 hover:bg-blue-900 focus:outline-none rounded-full absolute bottom-0 right-0"
          >
            Tweet
          </button>
        </form>
      </div>

      <div class="flex flex-col-reverse">
        <div
          v-for="tweet in tweets"
          :key="tweet"
          class="w-full p-4 border-b hover:bg-indigo-100 flex"
        >
          <div class="flex-none mr-4">
            <img
              src="https://i.pinimg.com/736x/29/7d/d7/297dd70909baabb7be6dcce8863ad0a8.jpg"
              class="w-12 h-12 rounded-full flex-none"
            />
          </div>
          <div class="w-full">
            <div v-if="currentUser" class="flex items-center w-full">
              <p class="font-semibold">{{ currentUser.userUsername }}</p>
              <p class="text-sm text-black ml-2">{{ currentUser.userEmail }}</p>
              <p class="text-sm text-black ml-2">10 min</p>
              <i class="fas fa-angle-down text-black ml-auto"></i>
            </div>
            <p class="py-2">{{ tweet.content }}</p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-black">
                <i class="far fa-comment mr-3"></i>
                <p>0</p>
              </div>
              <div class="flex items-center text-sm text-black">
                <i class="fas fa-retweet mr-3"></i>
                <p>0</p>
              </div>
              <div class="flex items-center text-sm text-black">
                <i class="fas fa-heart mr-3"></i>
                <p>0</p>
              </div>
              <div class="flex items-center text-sm text-black">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="follow in following"
        :key="follow"
        class="w-full p-4 border-b hover:bg-indigo-100 flex"
      >
        <div class="flex-none mr-4">
          <img
            :src="`${follow.src}`"
            class="w-12 h-12 rounded-full flex-none"
          />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold">{{ follow.name }}</p>
            <p class="text-sm text-black ml-2">{{ follow.handle }}</p>
            <p class="text-sm text-black ml-2">{{ follow.time }}</p>
            <i class="fas fa-angle-down text-black ml-auto"></i>
          </div>
          <p class="py-2">
            {{ follow.tweet }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-black">
              <i class="far fa-comment mr-3"></i>
              <p>{{ follow.comments }}</p>
            </div>
            <div class="flex items-center text-sm text-black">
              <i class="fas fa-retweet mr-3"></i>
              <p>{{ follow.retweets }}</p>
            </div>
            <div class="flex items-center text-sm text-black">
              <i class="fas fa-heart mr-3"></i>
              <p>{{ follow.like }}</p>
            </div>
            <div class="flex items-center text-sm text-black">
              <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- trending -->
    <div
      class="md:block hidden w-1/3 h-full border-l border-indigo-100 px-6 py-2 overflow-y-scroll relative"
    >
      <input
        class="rounded-full pl-12 text-sm w-full p-2 bg-indigo-100"
        placeholder="Search Twitter"
      />
      <i
        class="fas fa-search absolute left-0 top-0 mt-4 ml-12 text-sm text-indigo-200"
      ></i>
      <div class="w-full rounded-lg mt-4 bg-indigo-100">
        <div class="flex items-center justify-between p-3 hover:bg-blue-200">
          <p class="text-lg font-bold">Trend For you bro</p>
          <i class="fas fa-cog text-lg text-blue-400"></i>
        </div>
        <button
          v-for="trend in trends"
          :key="trend"
          class="w-full flex justify-between hover:bg-blue-200 p-3 border-t border-indigo-100"
        >
          <div>
            <p class="text-sm text-left leading-tight">{{ trend.top }}</p>
            <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
            <p class="text-left leading-tight text-black">{{ trend.bottom }}</p>
          </div>
          <i class="fas fa-angle-down text-lg text-black"></i>
        </button>
        <button
          class="text-blue-400 border-t border-indigo-100 hover:bg-blue-200 p-3 w-full text-left"
        >
          Show More
        </button>
      </div>

      <div class="w-full rounded-lg mt-4 bg-indigo-100">
        <div class="p-3">
          <p class="text-lg font-bold">Who to Follow</p>
        </div>
        <button
          v-for="fri in friends"
          :key="fri"
          class="w-full flex justify-between items-center hover:bg-blue-200 p-3 border-t border-indigo-100"
        >
          <div class="flex items-center">
            <img :src="`${fri.src}`" class="w-12 h-12 rounded-full" />
            <div class="lg:block hidden ml-4">
              <p class="text-sm font-bold leading-tight">{{ fri.name }}</p>
              <p class="text-sm leading-tight">{{ fri.handle }}</p>
            </div>
          </div>
          <div
            class="py-1 px-4 text-sm cursor-pointer rounded-full border-2 border-blue-400"
          >
            Follow
          </div>
        </button>
        <button
          class="text-blue-400 border-t border-indigo-100 hover:bg-blue-200 p-3 w-full text-left"
        >
          Show More
        </button>
      </div>
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { icon: "fas fa-home", title: "Home", id: "home" },
        { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
        { icon: "far fa-bell", title: "Notifications", id: "notifications" },
        { icon: "fa-solid fa-envelope", title: "Messages", id: "messages" },
        { icon: "far fa-bookmark", title: "Bookmarks", id: "bookmarks" },
        { icon: "fas fa-clipboard-list", title: "Lists", id: "lists" },
        { icon: "fa-solid fa-user", title: "Profile", id: "profile" },
        { icon: "fas fa-clipboard-list", title: "More", id: "more" },
      ],
      id: "home",
      dropdown: false,
      trends: [
        {
          top: "Anime",
          title: "NaRoTo",
          bottom: "Trending with: Naruto Ninja",
        },
        { top: "Steav", title: "Zin ||", bottom: "135k tweets" },
        { top: "Music", title: "SomTus Ban Te", bottom: "129.4k tweets" },
        { top: "Trending in khmer", title: "BC C Zin", bottom: "40k tweets" },
        { top: "Trending", title: "Kab ot", bottom: "12.4k tweets" },
      ],
      friends: [
        {
          src: "https://i.pinimg.com/564x/8b/5a/91/8b5a914d027c22873d77cf03e08dd495.jpg",
          name: "Mona Lisa",
          handle: "@monalisa",
        },
        {
          src: "https://i.pinimg.com/564x/9d/a0/4b/9da04bca7cd57a2fd434971d2e3d16ba.jpg",
          name: "NeyRuhh",
          handle: "@neyruhh",
        },
        {
          src: "https://i.pinimg.com/564x/62/30/85/6230857ceeff51acba9f3b22c2b6d6e9.jpg",
          name: "IshowSpeed",
          handle: "@speed",
        },
        {
          src: "https://i.pinimg.com/736x/44/1e/2b/441e2b9ff0715ed10bd5804a8eef316c.jpg",
          name: "KSI",
          handle: "@ksi",
        },
      ],
      following: [
        {
          src: "https://i.pinimg.com/564x/8b/5a/91/8b5a914d027c22873d77cf03e08dd495.jpg",
          name: "Mona Lisa",
          handle: "@monalisa",
          time: "20 min",
          tweet: "Should I just quarntine on mars ??",
          comments: "1,000",
          retweets: "100",
          like: "3,000",
        },
        {
          src: "https://i.pinimg.com/564x/9d/a0/4b/9da04bca7cd57a2fd434971d2e3d16ba.jpg",
          name: "NeyRuhh",
          handle: "@neyruhh",
          time: "4hr 10 min",
          tweet: "Should me and the rock do another sub=par movie together ?",
          comments: "2,000",
          retweets: "200,5",
          like: "2,000",
        },
        {
          src: "https://i.pinimg.com/564x/62/30/85/6230857ceeff51acba9f3b22c2b6d6e9.jpg",
          name: "IshowSpeed",
          handle: "@speed",
          time: "40 min",
          tweet: "hahha just made a flame thrower, shld I sell them ?",
          comments: "199",
          retweets: "303",
          like: "5,000",
        },
      ],
      tweets: [{ content: "It is so nice Today!!" }],
      tweeting: { content: "" },
    };
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.tweeting.content,
      };
      this.tweets.push(newTweet);
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>
