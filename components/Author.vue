<template>
  <div class="text-center w-full px-2 xs:mb-6 md:mb-12 article-card">
    <NuxtLink
      :to="`/blog/author/${author.name}`"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
    >

      <dl class="text-sm font-medium leading-5 whitespace-no-wrap">

        <dd class="text-gray-900" style="margin:0 auto;width:20%;padding:10px"><img
          v-if="author.img"
          width="50px"
          :src="author.img"
          class="w-10 h-10 rounded-full"
          style="margin: 0 auto;float:left;"
        /> <span style="float:left; margin-top: 10px;
    margin-left: 10px;">{{ author.name }}</span></dd>
      </dl>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
