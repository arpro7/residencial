<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  page: {
    title: "Starter",
  },
  data() {
    return {
      title: "Starter",
      items: [
        {
          text: "Pages",
          href: "/",
        },
        {
          text: "Starter",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    
    </Layout>
</template>