new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    },
    // first computed property
    computed: {
        sortedSubmissions() {
            // return a sorted list of submmisions from most to least
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    },
    // first method
    methods: {
        // retrieved v-on event listener and increment vote count by 1
        upvote(submissionId) {
            const submission = this.submissions.find(submission => submission.id ===submissionId);
            submission.votes++;
        }
    }
});