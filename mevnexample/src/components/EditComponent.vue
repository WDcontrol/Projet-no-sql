// EditComponent.vue
<template>
    <div>
        <h1>Edit Post</h1>
        <form @submit.prevent="updatePost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Titre</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Description:</label>
                        <textarea class="form-control" v-model="post.body" rows="5"></textarea>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Actif:</label>
                        <select disabled class="form-control" v-model="post.active">
                            <option value="true">Oui</option>
                            <option value="false">Non</option>
                        </select>
                    </div>
                </div>
            </div> -->
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Utilisateur</label>
                        <select class="form-control" v-model="post.user">
                            <option v-bind:key="user.id" :selected="user.selected" v-for="(user, index) in users" :value="users[index]">{{users[index].name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {

    data() {
        return {
            post: {},
            users: []
        }
    },
    created() {


        this.axios.all([
                this.axios.
                get('http://localhost:4000/users'),
                this.axios.
                get(`http://localhost:4000/posts/edit/${this.$route.params.id}`)
            ])
            .then(this.axios.spread(
                (usersRes, postRes) => {
                    this.users = usersRes.data;
                    this.post = postRes.data;
                }))
    },

    methods: {

        updatePost() {
            let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
            this.axios.post(uri, this.post).then(() => {
                this.$router.push({ name: 'posts' }); // redirection
            })
        }
    }
}
</script>