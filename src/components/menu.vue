<script>
import { layoutComputed } from "@/state/helpers";

export default {
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
    },
  },

  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");
      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains("show")) {
                let aChild = siblingCollapse.parentNode.firstChild;
                if (aChild.hasAttribute("aria-expanded")) {
                  aChild.setAttribute("aria-expanded", "false");
                }
                siblingCollapse.classList.remove("show");
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2)
                item.firstElementChild.setAttribute("aria-expanded", "false");
              let ids = item.querySelectorAll("*[id]");
              ids.forEach((item1) => {
                let aChild = item1.parentNode.firstChild;
                if (aChild.hasAttribute("aria-expanded")) {
                  aChild.setAttribute("aria-expanded", "false");
                }
                item1.classList.remove("show");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute("aria-expanded"))
                      subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", (e) => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach((childCollapse) => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.hide();
          });
        });
      });
    }
  },

  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition =
          document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          if (this.$refs.isSimplebar)
            this.$refs.isSimplebar.value.getScrollElement().scrollTop =
              currentPosition + 300;
      }
    },

    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document
            .querySelector("#navbar-nav")
            .querySelector('[href="' + ele + '"]');

          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add(
                "active"
              );
              parentCollapseDiv.parentElement.children[0].setAttribute(
                "aria-expanded",
                "true"
              );
              if (
                parentCollapseDiv.parentElement.closest(
                  ".collapse.menu-dropdown"
                )
              ) {
                parentCollapseDiv.parentElement
                  .closest(".collapse")
                  .classList.add("show");
                if (
                  parentCollapseDiv.parentElement.closest(".collapse")
                    .previousElementSibling
                )
                  parentCollapseDiv.parentElement
                    .closest(".collapse")
                    .previousElementSibling.classList.add("active");
              }
            }
          }
        }
      }, 0);
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <ul class="navbar-nav h-100" id="navbar-nav">
      <!-- --------------------------------------------------------------------------------------- Menu -->
      <li class="menu-title">
        <span data-key="t-menu">{{ $t("t-menu") }}</span>
      </li>
      <!-- --------------------------------------------------------------------------------------- 1 Control de Accesos -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenu1"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenu1"
        >
          <i class="ri-book-mark-line"></i>
          <span data-key="t-access-control">{{ $t("t-access-controls") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenu1">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-visitors">{{
                $t("t-visitors")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/access/logbook" class="nav-link" data-key="t-logbook">{{
                $t("t-logbook")
              }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- --------------------------------------------------------------------------------------- 2 Pagos -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenu2"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenu2"
        >
          <i class="ri-book-mark-line"></i>
          <span data-key="t-pays">{{ $t("t-pays") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenu2">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-visitors">{{$t("t-visitors")}}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- --------------------------------------------------------------------------------------- 3 Comunicados -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenu3"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenu3"
        >
          <i class="ri-book-mark-line"></i>
          <span data-key="t-announcements">{{ $t("t-announcements") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenu3">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-visitors">{{$t("t-visitors")}}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- --------------------------------------------------------------------------------------- 4 Reservaciones -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenu4"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenu4"
        >
          <i class="ri-book-mark-line"></i>
          <span data-key="t-reservations">{{ $t("t-reservations") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenu4">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-visitors">{{$t("t-visitors")}}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- --------------------------------------------------------------------------------------- 5 Encuesta -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenu5"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenu5"
        >
          <i class="ri-book-mark-line"></i>
          <span data-key="t-polls">{{ $t("t-polls") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenu5">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-visitors">{{$t("t-visitors")}}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- --------------------------------------------------------------------------------------- 6 Incidente -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenu6"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenu6"
        >
          <i class="ri-book-mark-line"></i>
          <span data-key="t-incidents">{{ $t("t-incidents") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenu6">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-visitors">{{$t("t-visitors")}}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- --------------------------------------------------------------------------------------- 7 Quejas y Sugerencias -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenu7"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenu7"
        >
          <i class="ri-book-mark-line"></i>
          <span data-key="t-complaints">{{ $t("t-complaints") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenu7">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-visitors">{{$t("t-visitors")}}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ---------------------------------------------------------------------------------------- Sistemas -->
      <li class="menu-title">
        <span data-key="t-services">{{ $t("t-services") }}</span>
      </li>
    </ul>
  </div>
</template>
