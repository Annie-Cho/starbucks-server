import axios from 'axios'
import cheerio from 'cheerio'

export const generatePersonal = ({ personal }) => {
    let result = ''
    
    //자릿수 확인 및 하이픈 확인
    if(personal.length !== 14 || !personal.includes('-')) {
        console.log("[ERROR] 이메일을 확인해주세요.")
        return false
    }

    //뒤에 별표시
    result = personal.split('').fill("*", -7).join('')
    return result
}

export const createPreferSiteData = async ({ prefer }) => {
    const page = await axios.get(prefer)
    let result = {
        title: '',
        description: '',
        image: ''
    }

    const $ = cheerio.load(page.data) //result랑 result.data랑 크게 달라보이지 않음..
    $(`meta`).each((_, el) => {
        if($(el).attr("property")?.includes("og:title")) {
            result.title = $(el).attr("content")
        }
        if($(el).attr("property")?.includes("og:description")) {
            result.description = $(el).attr("content")
        }
        if($(el).attr("property")?.includes("og:image")) {
            result.image = $(el).attr("content")
        }
    })

    return result
}