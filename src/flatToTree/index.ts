interface Info {
    id: number;
    menu: string;
    level: number;
    parentId?: number;
}

interface ResultInfo extends Omit<Info, 'parentId'> {
    children?: ResultInfo[];
}

const arr: Info[] = [
    { id: 1, menu: '水果', level: 1 },
    { id: 2, menu: '橘子', level: 2, parentId: 1 },
    { id: 3, menu: '蔬菜', level: 1 },
    { id: 4, menu: '橙子', level: 2, parentId: 1 },
    { id: 5, menu: '西兰花', level: 2, parentId: 3 },
    { id: 6, menu: '橘子皮', level: 3, parentId: 2 },
];

function buildTree(input: Info[]): ResultInfo[] {
    const map: { [key: number]: ResultInfo } = {};

    // 初始化ResultInfo节点，并建立id到节点的映射
    input.forEach(item => {
        const node: ResultInfo = { id: item.id, menu: item.menu, level: item.level };
        map[item.id] = node;
    });

    const roots: ResultInfo[] = [];

    // 建立父子关系
    input.forEach(item => {
        const node = map[item.id];
        if (item.parentId === undefined) {
            roots.push(node); // 如果没有parentId，则是根节点
        } else {
            const parent = map[item.parentId];
            if (parent.children) {
                parent.children.push(node);
            } else {
                parent.children = [node];
            }
        }
    });

    return roots;
}

console.log(JSON.stringify(buildTree(arr), null, 4));
