import { createWebHistory, createRouter } from "vue-router";
import tour from "@/views/tour.vue";

const routes = [
    {
        path: "/",
        name: "trangchu",
        component: TourReview,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/notfound.vue"),
    },
];

const router = createRouter({
    history: createHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;