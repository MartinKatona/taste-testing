<template>
  <div class="py-2 text-center">
    <icon
      icon="plus"
      btnClasses="mr-2"
      text="Add new item"
      @click="add()"
    ></icon>

    <icon
      icon="content-save"
      btnClasses="mr-2"
      text="Save all"
      @click="save()"
    ></icon>

    <!-- <icon
      icon="reload"
      btnClasses="mr-2"
      text="Refresh"
      @click="loadProteinList()"
    ></icon> -->

    <toggle v-model="darkMode" class="dense"></toggle>
    <label id="toggle-label" class="font-medium align-top top-2">
      Dark mode
    </label>
  </div>

  <divider></divider>
  <simple-table>
    <thead>
      <tr>
        <th class="px-2 pt-3 pb-2">Type</th>
        <th class="px-2 pt-3 pb-2">Flavour</th>
        <th class="px-2 pt-3 pb-2 text-center">Liquid (ml)</th>
        <th class="px-2 pt-3 pb-2">Liquid Name</th>
        <th class="px-2 pt-3 pb-2 text-center">Amount (g)</th>
        <th class="px-2 pt-3 pb-2">Comment</th>
        <th class="px-2 pt-3 pb-2 text-center">Rating / 10</th>
        <th class="px-2 pt-3 pb-2 text-center">Date</th>
        <th></th>
      </tr>
      <tr>
        <th class="px-2 py-1">
          <text-field class="w-28 filter-input" placeholder="Type" />
        </th>
        <th class="px-2 py-1">
          <text-field class="w-40 filter-input" placeholder="Flavour" />
        </th>
        <th class="px-2 py-1">
          <text-field class="w-24 filter-input" placeholder="Liquid" />
        </th>
        <th class="px-2 py-1">
          <text-field class="w-full filter-input" placeholder="Liquid Name" />
        </th>
        <th class="px-2 py-1">
          <text-field class="w-24 filter-input" placeholder="Amount" />
        </th>
        <th class="px-2 py-1">
          <text-field class="w-full filter-input" placeholder="Comment" />
        </th>
        <th class="px-2 py-1">
          <text-field class="w-24 filter-input" placeholder="Rating" />
        </th>
        <th class="px-2 py-1">
          <text-field class="w-full filter-input" placeholder="Date" />
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, i) in list" :key="data.name">
        <th class="px-2 py-2">
          <text-field class="w-28" v-model="data.item.type" />
        </th>
        <td class="px-2 py-2">
          <text-field class="w-40" v-model="data.item.flavour" />
        </td>
        <td class="px-2 py-2">
          <text-field
            type="number"
            class="w-24 text-center"
            v-model.number="data.item.liquid"
          />
        </td>
        <td class="px-2 py-2">
          <text-field v-model="data.item.liquidName" />
        </td>
        <td class="px-2 py-2">
          <text-field
            type="number"
            class="w-24 text-center"
            v-model.number="data.item.amount"
          />
        </td>
        <td class="px-2 py-2">
          <text-field v-model="data.item.comment" />
        </td>
        <td class="px-2 py-2">
          <text-field
            type="number"
            class="text-center w-24"
            min="0"
            max="10"
            v-model.number="data.item.rating"
          />
        </td>
        <td class="px-2 py-2">
          <text-field type="date" v-model="data.item.dateDisplay" />
        </td>
        <td class="px-2 py-2">
          <icon
            icon="delete"
            v-tooltip="'Delete item'"
            @click="remove(data)"
          ></icon>
        </td>
      </tr>
    </tbody>
  </simple-table>
</template>

<script lang="ts" setup>
import Toggle from "@vueform/toggle";
import { ref, watch } from "vue";

// List
const list = ref<any[]>([]);

// auto save with firebase
function add() {
  return;
}

// auto save with firebase
function save() {
  return;
}

// auto save with firebase
function remove(item: any) {
  return;
}

// Dark mode
let darkMode = ref<boolean>(localStorage.theme === "dark");
if (darkMode.value) document.documentElement.classList.add("dark");

watch(darkMode, () => {
  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
});
</script>
