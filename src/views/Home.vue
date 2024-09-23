<template>
    <div class="mx-5 mt-4">
        <h1>Welcome to {{ title2 }}!</h1>

        <div id="playWithInput" class="mt-3">
            <input type="text" v-model="input" class="me-2"/>
            <button type="button" @click="updateData" class="btn btn-outline-primary btn-sm">Update</button>
        </div>

        <div id="playWithSelect" class="mt-5">
            <div>
                <select class="form-select" v-model="selectedOption" @change="showName">
                    <option v-for="(data, index) in options" :key="index" :value="data.val">{{ data.val == '' ? data.text : data.val }}</option>
                </select>

                <p class="mt-1">Selected option: {{ selectedOption == '' ? 'N/A' : selectedOption }}</p>
            </div>
            <div class="mt-4">
                <table class="table table-bordered" v-show="showTable">
                    <tr v-for="(data, index) in filteredOptions" :key="index">
                        <td>{{ data.val }}</td>
                        <td>{{ data.text }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            title: "Home",
            title2: "Vue.js 101",
            input: "Abcd 1234",
            previousInput: "Abcd 1234",
            selectedOption: "",
            options: [
                { val: "", text: "Please select one." },
                { val: "LA", text: "Los Angeles" },
                { val: "MIA", text: "Miami" },
                { val: "CHI", text: "Chicago" },
                { val: "NY", text: "New York" },
                { val: "SF", text: "San Francisco" },
                { val: "SEA", text: "Seattle" },
            ],
            showTable: true,
            filteredOptions: [] // This will hold the selected option
        }
    },
    watch: {
        input() {
            // Watching changes to input
            console.log(this.input);
        }
    },
    mounted() {
        // Initially, show the row corresponding to the selected option
        this.showName();
    },
    methods: {
        updateData() {
            if (this.input !== this.previousInput) {
                // Notify the user that's changing
                alert(`${this.previousInput} is changing to ${this.input}`);

                // Update the previousInput
                this.previousInput = this.input;
            } else {
                alert("No Changes detected.");
            }
        },
        showName() {
            // Filter the options based on the selected option
            if (this.selectedOption !== '') {
                this.filteredOptions = this.options.filter(option => option.val === this.selectedOption);
            }
        }
    }
}
</script>
