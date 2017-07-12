Template.notice.events({
    'click [name=submit]': function () {
        var title = $('[name=title]').val()
        var num = $('[name=num]').val()
        var count = $('[name=count]').val()
        var content = $('[name=content]').val()
        
        var obj = {
            '제목': title,
            '글번호': num,
            '조회수': count,
            '내용': content
        }
        
        console.log(obj)
        CollectionBoard.insert(obj)
    }
})

Template.notice.helpers({
    list: function () {
        var result = [
            {
                '글번호': 1,
                '제목': "서울여대 그루 1 강의 개강확정",
                '조회수': 26
            },
            {
                '글번호': 2,
                '제목': "서울여대 그루 2 강의 개강확정",
                '조회수': 168
            },
            {
                '글번호': 3,
                '제목': "서울여대 그루 3 강의 개강확정",
                '조회수': 56
            }
        ]
        return result
    }
});