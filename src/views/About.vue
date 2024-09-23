<template>
    <div class="mx-5 mt-4 about-project">
        <h1 class="mb-4">About Vue.js 101</h1>
        <p><strong>This project is a simple introduction to Vue.js concepts, including component rendering, data binding, and event handling.</strong></p>

        <div class="text-center">
            <p>In this project, you’ll find examples of:</p>
            <ul class="text-left d-inline-block">
                <li><strong>Form handling</strong> using <code>v-model</code> for two-way data binding.</li>
                <li><strong>Event-driven interactions</strong> such as responding to user input with <code>@click</code> and <code>@change</code> directives.</li>
                <li><strong>Dynamic rendering</strong> with <code>v-for</code>, allowing smooth updates to the DOM based on data changes.</li>
                <li><strong>Conditional rendering</strong> to show or hide elements based on the app’s state.</li>
            </ul>
        </div>

        <div class="mx-5 mt-4">
            <p>Additionally, <strong>Bootstrap</strong> was used throughout the project to style various elements, including the navigation header, form inputs, buttons, and tables.</p>
            <p>This demonstrates how Vue.js can be combined with a CSS framework like Bootstrap to build responsive, clean, and user-friendly interfaces.</p>
            <p>Feel free to play the form fields, dropdowns, and tables in the Home section to see how everything works together.</p>
            <p><strong>Thank You for checking it out! :)</strong></p>

            <p class="mt-5 mb-0">Ellie Kim</p>
            <p class="mt-0">Powered by Vue.js & Bootstrap</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style>
.about-project li {
    text-align: left;
}
</style>

