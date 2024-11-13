<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue';
import profile from "../modules/members/profile.vue";

const profiles = [
  {
    name: "池マル",
    course: "PC program",
    roles: ["リーダー", "3Dモデリング"],
    path: "assets/icons/profile_001.webp"
  },
  {
    name: "りょ",
    course: "NS program",
    roles: ["サブリーダー", "プログラミング"],
    path: "assets/icons/profile_002.webp"
  },
  {
    name: "ピンキー",
    course: "IB program",
    roles: ["マネージャー", "デザイン"],
    path: "assets/icons/profile_003.webp"
  },
  {
    name: "メロンパン星人",
    course: "PC program",
    roles: ["3Dモデリング", "電子回路設計"],
    path: "assets/icons/profile_004.webp"
  },
  {
    name: "虫",
    course: "DS program",
    roles: ["3Dモデリング", "動画制作"],
    path: "assets/icons/profile_005.webp"
  },
  {
    name: "まひ",
    course: "PC program",
    roles: ["3Dモデリング", "デザイン"],
    path: "assets/icons/profile_006.webp"
  },
  {
    name: "はぎ",
    course: "PC program",
    roles: ["3Dモデリング", "プログラミング"],
    path: "assets/icons/profile_007.webp"
  },
  {
    name: "ぷぅさん",
    course: "PC program",
    roles: ["3Dモデリング", "プログラミング"],
    path: "assets/icons/profile_008.webp"
  },
  {
    name: "시준",
    course: "NS program",
    roles: ["プログラミング", "広報・連絡"],
    path: "assets/icons/profile_009.webp"
  },
  {
    name: "太田 隆博",
    course: "担当教員",
    roles: ["パクチーがキライです"],
    path: "assets/icons/profile_010.webp"
  }
];

// Profile filter
const selectedProgram = ref("");
const selectedRole = ref("");
const showProgramDropdown = ref(false);
const showRoleDropdown = ref(false);

const filteredProfiles = computed(() => {
  return profiles.filter(profile =>
      (selectedProgram.value === "" || profile.course === selectedProgram.value) &&
      (selectedRole.value === "" || profile.roles.includes(selectedRole.value))
  );
});

const programs = Array.from(new Set(profiles.map(profile => profile.course)));
// const roles = Array.from(new Set(profiles.flatMap(profile => profile.roles)));
const roles = ["3Dモデリング", "プログラミング", "デザイン"];

const programDropdownRef = ref(null);
const roleDropdownRef = ref(null);
const closeDropdowns = (event) => {
  if (programDropdownRef.value && !programDropdownRef.value.contains(event.target)) {
    showProgramDropdown.value = false;
  }
  if (roleDropdownRef.value && !roleDropdownRef.value.contains(event.target)) {
    showRoleDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', closeDropdowns);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', closeDropdowns);
});
</script>

<template>
  <div
      class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div class="mt-32 mb-60 mx-3 flex flex-col justify-center font-Default text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">Members</h1>
      </div>

      <div class="flex flex-col md:flex-row items-end md:justify-end font-light text-white text-base mt-5">
        <div class="mr-3 z-20">
          <a class="block w-full text-right md:text-left pr-0.5">Program</a>
          <div ref="programDropdownRef" class="relative">
            <button class="w-44 text-left rounded-lg duration-500 bg-zinc-800 bg-opacity-70 hover:bg-zinc-900 p-2"
                    @click="showProgramDropdown = !showProgramDropdown">
              <span class="inline-block duration-500 mr-1"
                    :class="{'rotate-90 duration-500': showProgramDropdown}">&gt;</span>
              {{ selectedProgram || "全てのプログラム" }}
            </button>
            <transition
                enter-from-class="opacity-0"
                enter-active-class="duration-300"
                leave-to-class="opacity-0"
                leave-active-class="duration-300">
              <div v-show="showProgramDropdown" class="absolute left-0 w-full text-left rounded-lg bg-zinc-800 mt-2">
                <ul>
                  <li class="cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2"
                      @click="selectedProgram = ''; showProgramDropdown = false">全てのプログラム
                  </li>
                  <li v-for="program in programs" :key="program"
                      class="cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2"
                      @click="selectedProgram = program; showProgramDropdown = false">{{ program }}
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>

        <div class="mr-3 md:mr-7 mt-2 md:mt-0 z-10">
          <a class="block w-full text-right md:text-left pr-0.5">Role</a>
          <div ref="roleDropdownRef" class="relative">
            <button class="w-52 text-left rounded-lg duration-500 bg-zinc-800 bg-opacity-70 hover:bg-zinc-900 p-2"
                    @click="showRoleDropdown = !showRoleDropdown">
              <span class="inline-block duration-500 mr-1"
                    :class="{'rotate-90 duration-500': showRoleDropdown}">&gt;</span>
              {{ selectedRole || "全ての役割" }}
            </button>
            <transition
                enter-from-class="opacity-0"
                enter-active-class="duration-300"
                leave-to-class="opacity-0"
                leave-active-class="duration-300">
              <div v-show="showRoleDropdown" class="absolute left-0 w-full text-left rounded-lg bg-zinc-800 mt-2">
                <ul>
                  <li class="cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2"
                      @click="selectedRole = ''; showRoleDropdown = false">全ての役割
                  </li>
                  <li v-for="role in roles" :key="role"
                      class="cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2"
                      @click="selectedRole = role; showRoleDropdown = false">{{ role }}
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <div v-if="filteredProfiles.length === 0" class="text-center text-white mt-10">
        選択された条件に一致するメンバーはおりません。
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <profile
            v-for="member in filteredProfiles"
            :key="member.name"
            :name="member.name"
            :course="member.course"
            :roles="member.roles"
            :path="member.path"
        />
      </div>
    </div>
  </div>
</template>
