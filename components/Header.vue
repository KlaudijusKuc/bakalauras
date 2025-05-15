<template>
  <header class="bg-blue-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">My Website</h1>
      <nav>
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="hover:text-blue-200">Home</NuxtLink></li>
          <li><NuxtLink to="/contacts" class="hover:text-blue-200">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/admin" class="hover:text-blue-200">Admin</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template> 