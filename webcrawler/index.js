import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import { Coffee } from './models/starbucks.model.js'

mongoose.connect("mongodb://localhost:27017/myData")

const coffeeCrawling = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.starbucks.co.kr/menu/drink_list.do')
    await page.waitForTimeout(1000)

    let i
    for(i=1; i<=32; i++) {
        const name = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dd`,
            (el) => el.textContent
        )
        
        const img = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dt > a > img`,
            (el) => el.getAttribute('src')
        )

        const coffee = new Coffee({
            name,
            img
        })
        await coffee.save()
    }
    if(i === 33) {
        console.log(`총 ${i-1}개의 커피 데이터 가져오기 성공`)
    }
    await browser.close()
}

coffeeCrawling()
