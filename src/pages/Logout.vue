<template>
    <div />
</template>
<script>
export default {
    name: 'Logout',
    beforeCreate () {
        if (!this.$store.getters['auth/loggedIn']) {
            this.$router.push('/login')
        }
    },
    mounted () {
        this.$store.dispatch("auth/logout")
        if (this.$store.getters['auth/loggedIn']) {
            // location.reload()
            this.$router.push('/login')
        }
    }
}
</script>
