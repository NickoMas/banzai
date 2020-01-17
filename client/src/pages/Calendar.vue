<template>
    <section class="content-block content-calendar" id="calendar">
        <!-- <h2 class="content-header">Calendar</h2> -->
        <h2 class="content-header">Календарь</h2>
        <vc-calendar
            is-dark
            is-expanded
            color="orange"
            locale="rus"
            :attributes='attrs'>
        </vc-calendar>    
    </section>
</template>

<script>
// import { DatePicker } from 'v-calendar';

export default {
    // components: {
    //     'v-calendar': VCalendar
    // },
    data() {
        return {
            selectedValue: new Date(2019, 11, 12),
            attrs: [
                {
                    key: 'today',
                    highlight: 'blue',
                    dates: [
                        new Date()
                    ]
                },
                {
                    popover: {
                        positionFixed: true,
                        label: 'Drezden open 2020'
                    },
                    highlight: true,
                    dates: [
                        { start: new Date(2020, 0, 18), span: 3 } // # of days
                    ]
                },
                {
                    popover: {
                        visibility: 'click',
                        label: 'День рождения: Пупкин И.'
                    },
                    dot: {
                        color: 'green',
                    },
                    dates: [
                        new Date(2020, 0, 5),
                    ],
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

<style>
    .vc-title { /** used only here */
        text-transform: capitalize;
    }

    .c-pane-container.is-expanded {
        background-color: unset !important;
        color: #ffffff;
    }
</style>