<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <form class="form-random">
        <select class="select-gender">
            <option v-for="gender in this.genders" value="gender"></option>
        </select>
    </form>
</template>

<style lang="scss"></style>