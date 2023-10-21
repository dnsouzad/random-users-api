

<script>
import moment from 'moment'
export default {
    props: {
        users: Object,
        isLoading: Boolean,
    },
    data() {
        return {
            loading: {
                color: "#cb5fec",
                size: "20px"
            },

        }
    },
    methods: {
        momentMethod(date) {
            return moment(date).format("DD/MM/YYYY")
        },
        onCopy(e) {
            console.log(e.text)
        },
        onError(e) {
            console.error(e)
        }
    },
}
</script>

<template>
    <div class="template-infos">

        <div class="loading-container" v-if="isLoading">
            <sync-loader :loading="isLoading" :color="loading.color" :size="loading.size"></sync-loader>
        </div>
        <div class="container-cards" v-if="!isLoading">
            <div class="card" v-for="user in users">
                <div class="avatar-name card-header bg-transparent">
                    <img class="img-user" :src="user.picture.large" :alt="user.name.first">
                    <h5 class="card-title">{{ user.name.title + ". " + user.name.first + " " + user.name.last }}</h5>
                </div>

                <div class="card-body">
                    <div class="info" v-clipboard:copy="user.phone" v-clipboard:success="onCopy" v-clipboard:error="onError"
                        v-tooltip="{ content: user.phone, placement: 'right' }">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                        <span>{{ user.phone }}</span>
                    </div>
                    <div class="info" v-clipboard:copy="user.email" v-clipboard:success="onCopy" v-clipboard:error="onError"
                        v-tooltip="{ content: user.email, placement: 'right' }">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                        <span>{{ user.email }}</span>
                    </div>
                    <div class="info" v-clipboard:copy="user.login.username" v-clipboard:success="onCopy"
                        v-clipboard:error="onError" v-tooltip="{ content: user.login.username, placement: 'right' }">
                        <font-awesome-icon :icon="['fas', 'user']" />
                        <span>{{ user.login.username }}</span>
                    </div>
                    <hr>
                    <div class="info not-clicked">
                        <font-awesome-icon :icon="['fas', 'cake-candles']" />
                        <span>{{ momentMethod(user.dob.date) + " (" + user.dob.age + " y/o)" }}</span>
                    </div>
                    <div class="info not-clicked">
                        <font-awesome-icon :icon="['fas', 'venus-mars']" />
                        <span style="text-transform: capitalize;">{{ user.gender }}</span>
                    </div>
                    <div class="info not-clicked">
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                        <span>{{ user.location.city + ", " + user.location.state + " - " + user.location.country }}</span>
                    </div>
                </div>

                <div class="card-footer text-end">
                    <span>{{ momentMethod(user.registered.date) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import url("./Infos.scss");
</style>