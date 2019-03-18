// IndexComponent.vue
<template>
    <div>
        <h1>Posts</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
            </div>
        </div><br />
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Utilisateur</th>
                    <!-- <th>Active</th> -->
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                    <td>{{ post.user[0].name }}</td>
                    <!-- <td>{{ post.active }}</td> -->
                    <td>
                        <router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link>
                    </td>
                    <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Supprimer</button></td>
                    <td><button v-if="post.active=true" class="btn btn-danger" @click.prevent="validatePost(post._id, post.user[0]._id)">Valider</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [],
            users: []
        }
    },
    created() {


        this.axios.all([
                this.axios.
                get('http://localhost:4000/users'),
                this.axios.
                get('http://localhost:4000/posts')
            ])
            .then(this.axios.spread(
                (usersRes, postsRes) => {
                    this.users = usersRes.data;
                    this.posts = postsRes.data;
                }));
    },
    methods: {
        deletePost(id) {
            let uri = `http://localhost:4000/posts/delete/${id}`;
            this.axios.delete(uri)
                .then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });
        },

        validatePost(id, user) {
            // let uri = `http://localhost:4000/posts/validate/${id}`;
            // this.axios.post(uri)
            //     .then(response => {
            //         this.posts.splice(this.posts.indexOf(id), 1);
            //     });

            let uri = `http://localhost:4000/posts/delete/${id}`;
            this.axios.delete(uri)
                .then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });

            let uri2 = `http://localhost:4000/users/update/${user}`;
            // console.log(`${user}` + " " + `${id}`)
            this.axios.post(uri2)
                .then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });
        },
    }



}
</script>