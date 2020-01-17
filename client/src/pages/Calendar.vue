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

export default {
    // components: {
    //     'v-calendar': VCalendar
    // },
    data() {
        return {
            selectedValue: new Date(2019, 11, 12),
            attrs: [
                {
                    // isDark: true,
                    key: 'today',
                    highlight: true,
                    dates: [
                        new Date(),
                        { start: new Date(2020, 0, 15), span: 5 } // # of days
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