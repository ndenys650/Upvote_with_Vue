
// create child submission-component
const submissionComponent =  {
    template: 
    `<div style="display: flex; width: 100%">
        <figure class="media-left">
            <img class="image is-64x64" v-bind:src="submission.submissionImage">
        </figure>
        
        <div class="media-content">
            <div class="content">
                <p>
                <strong>
                    <a v-bind:href="submission.url" class="has-text-info">
                    {{ submission.title }}
                    </a>
                    <span class="tag is-small">#{{ submission.id }}</span>
                </strong>
                <br>
                    {{ submission.description }}
                <br>
                <small class="is-size-7">
                    Submitted by:
                    <img class="image is-24x24"
                    v-bind:src="submission.avatar">
                </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small" v-on:click="upvote(submission.id)">
                <i class="fa fa-chevron-up"></i>
                <strong class="has-text-info">{{ submission.votes }}</strong>
            </span>
        </div>
    </div>`,
    // pass props from parent component
    props: ['submission', 'submissions'],
    // bring method from parent component into child
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find( submission => submission.id === submissionId);
            submission.votes++;
        }
    }
};

// parent component
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
    // 'importing' submission component into parent
    components: {
        'submission-component': submissionComponent
    }
});