const axios = require("axios")
const express = require('express');
const { link } = require("fs");
const router = express.Router();

router.get('/lotto/lastest', async (req, res) => {
	const { data } = await axios.post('https://www.glo.or.th/api/lottery/getLatestLottery')
    res.send(data)
})

router.post('/lotto/check',  async (req, res) => {
	const { data } = await axios.post('https://www.glo.or.th/api/checking/getcheckLotteryResult')
    res.send(data)
});





module.exports = router
