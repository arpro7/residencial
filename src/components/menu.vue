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
            let siblingCollapses = closestCollapse.querySelectorAll(".collapse");
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
              if (item.childNodes.length > 2) item.firstElementChild.setAttribute("aria-expanded", "false");
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
                    if (subitem.hasAttribute("aria-expanded")) subitem.setAttribute("aria-expanded", "false");
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
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          if (this.$refs.isSimplebar) this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
      }
    },

    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');

          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                  parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
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
      <!-- ----------------------------------------------------------------------------------------------------------------- Menu -->
      <li class="menu-title">
        <i class="ri-more-fill"></i>
        <span data-key="t-menu">{{ $t("t-menu") }}</span>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Contactos -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuContacts"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuContacts"
        >
          <i class="ri-map-pin-user-line"></i>
          <span data-key="t-contacts">{{ $t("t-contacts") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuContacts">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/contacts/companies" class="nav-link" data-key="t-company">{{ $t("t-company") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-users">{{ $t("t-users") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-suppliers">{{ $t("t-suppliers") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Ventas -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuSales"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuSales"
        >
          <i class="ri-funds-line"></i>
          <span data-key="t-sales">{{ $t("t-sales") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuSales">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-invoice">{{ $t("t-invoice") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-budget">{{ $t("t-budget") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-services">{{ $t("t-services") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Gastos -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuSpents"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuSpents"
        >
          <i class="ri-hand-coin-line"></i>
          <span data-key="t-spents">{{ $t("t-spents") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuSpents">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-spents">{{ $t("t-spents") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-payroll">{{ $t("t-payroll") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Inventarios -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuInventory"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuInventory"
        >
          <i class="ri-building-2-line"></i>
          <span data-key="t-spents">{{ $t("t-inventory") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuInventory">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-products">{{ $t("t-products") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-wharehouse">{{ $t("t-wharehouse") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Activos -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuAssets"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuAssets"
        >
          <i class="ri-briefcase-2-line"></i>
          <span data-key="t-assets">{{ $t("t-assets") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuAssets">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-checkin">{{ $t("t-checkin") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-checkout">{{ $t("t-checkout") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Equipos -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuTeams"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuTeams"
        >
          <i class="ri-open-arm-line"></i>
          <span data-key="t-teams">{{ $t("t-teams") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuTeams">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-zone">{{ $t("t-zone") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-employees">{{ $t("t-employees") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-lacks">{{ $t("t-lacks") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-work-schedule">{{ $t("t-work-schedule") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-inbox">{{ $t("t-inbox") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-task">{{ $t("t-task") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Equipos -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuProjects"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuProjects"
        >
          <i class="ri-stack-line"></i>
          <span data-key="t-projects">{{ $t("t-projects") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuProjects">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-crm">{{ $t("t-crm") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Contabilidad -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuAccounting"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuAccounting"
        >
          <i class="ri-bar-chart-2-line"></i>
          <span data-key="t-accounting">{{ $t("t-accounting") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuAccounting">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-crm">{{ $t("t-accounting") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Analitica -->
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#sidebarMenuAnalytics"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarMenuAnalytics"
        >
          <i class="ri-slideshow-line"></i>
          <span data-key="t-analytics">{{ $t("t-analytics") }}</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarMenuAnalytics">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-key="t-target">{{ $t("t-target") }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- ----------------------------------------------------------------------------------------------------------------- Sistemas -->
      <li class="menu-title">
        <i class="ri-more-fill"></i>
        <span data-key="t-systems">{{ $t("t-systems") }}</span>
      </li>
    </ul>
  </div>
</template>
