
<script setup>
import Button from './components/Button.vue';
import Infos from './components/Infos.vue';
</script>

<script>
import api from "./api";
import { genders, nationalities } from "./listData"

export default {
    name: 'User',
    data() {
        return {
            users: [],
            nationality: [],
            gender: "",
            genders: genders,
            nationalities: nationalities,
            count: 1,
            isLoading: false
        }
    },
    created() {
        this.getUsers()
    },
    methods: {
        async getUsers() {
            this.isLoading = true;
            await api
                .get("/?results=" + this.count + "&gender=" + this.gender + "&nat=" + this.nationality)
                .then((res) => {
                    this.users = res.data.results
                })
                .catch((err) => {
                    console.error(err.message)
                })
                .finally((res) => this.isLoading = false)
        },

    }
}

</script>

<template>
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h1 class="title">Random User</h1>
        
        <!-- CONTAINER INFOS PARAMS -->
        <div class="form-user">

            <!-- GENDER -->
            <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender" v-model="gender" class="form-select">
                    <option value="">-- None --</option>
                    <option v-for="gender in genders" :value="gender.value" :key="gender.id">{{ gender.label }}</option>
                </select>
            </div>

            <!-- NATIONALITIES -->
            <div class="form-group">
                <label for="nationality">Nationality</label>
                <select multiple id="nationality" v-model="nationality" class="form-select">
                    <option value="">-- None --</option>
                    <option v-for="nationality in nationalities" :value="nationality.value" :key="nationality.id">{{
                        nationality.label }}</option>
                </select>
            </div>

            <!-- USERS COUNT -->
            <div class="form-group">
                <label for="count">Quantity Users</label>
                <input type="number" min="1" max="500" v-model="count" name="count-users" class="form-control" id="count">
            </div>
        </div>

        <Button title="Generate User(s)" v-on:click="getUsers()" class-name="reload-button" icon="rotate-right" />
        <Infos :users="this.users" :isLoading="this.isLoading" />

    </div>
</template>

<style scoped lang="scss">
.container {
    .title {
        color: var(--font-color);
        font-weight: 700;
        font-size: 40px;
        padding-block: 30px 100px;
    }

    .form-user {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;

        .test-info {
            color: white;

        }

        .form-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 25%;
            gap: 5px;
            padding-block: 10px;

            @media screen and (max-width: 992px){
                width: 100%;
            }

            label {
                color: var(--font-color);
                font-weight: 500;
            }
        }
    }
}
</style>
