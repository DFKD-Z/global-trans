import { NextRequest, NextResponse } from 'next/server'

export async function GET(_request: NextRequest) {
    const response = {
        name: 'Jack zhang',
        email: 'jack.zhang@example.com',
        age: 30,
        city: 'Beijing',
        country: 'China',
        isAdmin: true,
        token: '1234567890',
        author_menu: [
            {
                title: 'App',
                url: '/project?platform=app&id=wumaji',
                items: [
                    {
                        title: '挖煤姬',
                        url: '/project?platform=app&id=wumaji',
                    },
                    {
                        title: '任意门',
                        url: '/project?platform=app&id=renyimen',
                    },
                ],
            },
            {
                title: 'Web',
                url: '/project?platform=web&id=doorzo',
                items: [
                    { title: 'Doorz', url: '/project?platform=web&id=doorz' },
                    { title: '挖煤姬', url: '/project?platform=web&id=wumaji' },
                    { title: '任意门', url: '/project?platform=web&id=renyimen' },
                    { title: 'h5', url: '/project?platform=web&id=h5' },
                    { title: 'new-h5', url: '/project?platform=web&id=new-h5' },
                ],
            },
            {
                title: 'Backend',
                url: '/project?platform=backend&id=wumaji',
                items: [
                    { title: 'Backend1', url: '/project?platform=backend&id=wumaji' },
                ],
            },
        ],
    }
  return NextResponse.json(response)
}