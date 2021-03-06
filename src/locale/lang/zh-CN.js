import setLang from '../lang'

const lang = {
  m: {
    locale: 'zh-CN',
    select: {
      loading: '加载中',
      emptyData: '暂无数据',
      placeholder: '请选择',
    },
    datePicker: {
      selectDate: '选择日期',
      selectTime: '选择时间',
      ok: '确定',
      clean: '清除',
      year: '年',
      month: '月',
      startTime: '开始时间',
      endTime: '结束时间',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六',
      },
      months: {
        m1: '1月',
        m2: '2月',
        m3: '3月',
        m4: '4月',
        m5: '5月',
        m6: '6月',
        m7: '7月',
        m8: '8月',
        m9: '9月',
        m10: '10月',
        m11: '11月',
        m12: '12月',
      },
    },
    drawer: {
      okText: '确定',
      cancelText: '取消',
    },
    modal: {
      okText: '确定',
      cancelText: '取消',
    },
    page: {
      total: '共',
      item: '条',
      goto: '跳至',
      page: '页',
    },
    popover: {
      okText: '确定',
      cancelText: '取消',
    },
    table: {
      emptyData: '暂无数据',
      all: '全部',
      reset: '重置',
      filter: '筛选',
    },
    tree: {
      emptyData: '暂无数据',
    },
    image: {
      errorText: '加载失败',
    },
    cascader: {
      loading: '加载中',
      emptyData: '暂无数据',
      placeholder: '请选择',
    },
  },
}

setLang(lang)

export default lang
