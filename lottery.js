const axios = require("axios")
const express = require('express');
const router = express.Router();

router.get('/lotto/lastest', async (req, res) => {
    const { data } = await axios.post('https://www.glo.or.th/api/lottery/getLatestLottery')
    res.send(data)
})

router.get('/lotto/listdate', async (req, res) => {

    const { data } = await axios.post('https://www.glo.or.th/api/lottery/getPeriodsByYear',{
        type:"CHECKED",
        year:req.body.year
    })
    res.send(data)
});

router.get('/lotto/award', async (req, res) => {

    const { data } = await axios.post('https://www.glo.or.th/api/lottery/getLotteryAward',{
        date:"01",
        month:"12",
        year:"2020"
    })
    res.send(data)
});

router.get('/lotto/stats', async (req, res) => {

    const { data } = await axios.post('https://www.glo.or.th/api/mission/getMissionStatsRewardPrevious',{
        from:req.body.from,
        to:req.body.to
    })
    res.send(data)
});

router.post('/lotto/check', async (req, res) => {

    const { data } = await axios.post('https://www.glo.or.th/api/checking/getcheckLotteryResult',
        {
            number:req.body.number,
            period_date: req.body.period_date
        })
    res.send(data)
});

module.exports = router
