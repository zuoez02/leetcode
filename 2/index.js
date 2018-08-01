function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let a = l1;
    let b = l2;
    let more = 0;
    let current = new ListNode(0);
    let pre = null;
    let head = current;
    while (a !== null && b !== null) {
        let valA = a ? a.val : 0;
        let valB = b ? b.val : 0;
        let total = valA + valB + more;
        if (total >= 10) {
            more = 1;
            total = total - 10;
        } else {
            more = 0;
        }
        current.val = total;
        a = a ? a.next : null;
        b = b ? b.next : null;
        let newNode = new ListNode(0);
        current.next = newNode;
        pre = current;
        current = newNode;
    }
    const n = a || b;
    if (n) {
        pre.next = n;
        current = n;
        while(current) {
            if (more > 0) {
                if (current.val === 9) {
                    current.val = 0;
                } else {
                    current.val++;
                    more = 0;
                }
            }
            pre = current;
            current = current.next;
        }
    }
    pre.next = more === 1 ? new ListNode(1) : null;
    
    return head;
};

const m = [new ListNode(2), new ListNode(4), new ListNode(3)];
const n = [new ListNode(5), new ListNode(6), new ListNode(4)];
const a = m[0];
const b = n[0];

function arrToList(ll) {
    for(let i = 0;i <= ll.length - 1;i++) {
        if (i + 1 < ll.length) {
            ll[i].next = ll[i + 1];
        } else {
            ll[i].next = null;
        }
    }    
}

arrToList(m);
arrToList(n);

let r = addTwoNumbers(a, b);
console.log(r);

while (r) {
    console.log(r.val, '->')
    r = r.next;
}