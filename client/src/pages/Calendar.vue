<template>
    <section class="content-block content-calendar" id="calendar">
        <h2 class="content-header">Calendar</h2>
        <v-calendar
            is-expanded
            :attributes='attrs'>
        </v-calendar>    
    </section>
</template>

<script>
import { setupCalendar, Calendar} from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css';

setupCalendar({
  firstDayOfWeek: 2,
  locale: 'rus'
});

console.log('call')

export default {
    components: {
        'v-calendar': Calendar
    },
    data() {
        return {
            selectedValue: new Date(),
            attrs: [
                {
                key: 'today',
                highlight: {
                    backgroundColor: '#ff8080',
                    // Other properties are available too, like `height` & `borderRadius`
                },
                dates: new Date(2018, 0, 1)
                }
            ],
        };
    },
    // methods: {
    //     setupCalendar({
    //         firstDayOfWeek: 2
    //     });
    // }
}

</script>