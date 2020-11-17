<template>
  <div>
    <div class="row" style="margin-top: 48px;">
      <div class="col">
        <div class="dates mb-3 text-uppercase">{{monthNames[monthNow]}} {{todayDate}} - {{dayTo}} {{yearNow}}</div>
        <h1 class="todayDegrees">{{averageNext10Days}}<span class="degreeSign">°C</span></h1>
      </div>
    </div>
    <div class="row justify-content-between" style="margin-top: 48px;">
      <div class="col-1 d-flex align-items-center flex-column" v-for="(day, i) in sortedWeekDays" :key="day">
        <div class="dayOfWeek">{{day}}</div>
        <div class="smallTemp">{{forecast[i]}}<span class="smallTempSign">°C</span></div>
      </div>
    </div>
  </div>
</template>

<script>
const today = new Date();
const lastDay = new Date();
lastDay.setDate(today.getDate() + 6);
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default {
  name: 'WeatherView',
  data: function() {
    return  {
      monthNames,
      weekDays,
      todayDate: today.getDate(),
      dayTo: lastDay.getDate(),
      yearNow: today.getFullYear(),
      monthNow: today.getMonth(),
      // dayOfTheWeek: this.getWeekArr()
      sortedWeekDays: this.getWeekArr()
    }
  },
  computed: {
    averageNext10Days () {
      return this.$store.state.averageNext10Days
    },
    forecast () {
      return this.$store.state.forecast
    }
  },
  methods: {
    getWeekArr () {
      let firstDay = today.getDay() + 1;
      const sortedWeekDays = [];
      for (let i = 0; i < 7; i++) {
        if (firstDay < 7) {
          sortedWeekDays.push(weekDays[firstDay]);
        } else {
          sortedWeekDays.push(weekDays[firstDay - 7]);
        }
        firstDay++;
      }
      return sortedWeekDays;
    }
  }
}
</script>

<style scoped>
.todayDegrees {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 120px;
  color: #FFFFFF;
}
.degreeSign {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  vertical-align:top;
}

.dates {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: #08153E;
  opacity: 0.6;
}

.dayOfWeek {
  font-family: Poppins;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: #08153E;
  opacity: 0.6;
}

.smallTemp {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
}

.smallTempSign {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  vertical-align: top;
}
</style>



