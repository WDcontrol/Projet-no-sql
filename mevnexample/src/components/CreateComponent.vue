// CreateComponent.vue
<template>
    <div>
        <h1>Créer un ticket</h1>
        <form @submit.prevent="addPost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Nom du ticket:</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Description du ticket:</label>
                        <textarea class="form-control" v-model="post.body" rows="5"></textarea>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Actif ?</label>
                        <select class="form-control" v-model="post.active">
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>
                </div>
            </div> -->
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Utilisateur</label>
                        <select id="user-select" class="form-control" v-model="post.user">
                            <option :value="users[index]" v-for="(user, index) in users" v-bind:key="user.id">{{users[index].name}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <div class="form-group">
                <button class="btn btn-primary">Créer</button>
                <router-link class="cancel btn btn-secondary" to="/posts">Annuler</router-link>
            </div>
        </form>
    </div>
</template>
<style>
.cancel {
    margin-left: 5px;
}
</style>
<script>

export default {

    data() {
        return {
            post: {},
            posts: [],
            users: []
        }
    },
    created() {
        let uri = 'http://localhost:4000/users';
        this.axios.get(uri).then(response => {
            this.users = response.data;
        });
    },
    methods: {
        addPost() {
            let uri = 'http://localhost:4000/posts/add';
            this.axios.post(uri, this.post).then(() => {
                this.$router.push({ name: 'posts' });
            })
        }

    }
}
</script>