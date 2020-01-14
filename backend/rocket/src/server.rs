#![feature(proc_macro_hygiene, decl_macro)]

use rocket::request::Form;

#[get("/")]
fn index() -> &'static str {
    return "Hello, world";
}

#[get("/hello/<name>/<age>/<cool>")]
fn hello(name: String, age: u8, cool: bool) -> String {
    let mut ret = String::new();
    ret.push_str("Hello, you are a ");
    if cool {
        ret.push_str("cool ");
    }
    ret.push_str(&format!("{} year old named {}", age, name.as_str()));

    return ret;
}

#[derive(FromForm)]
struct Task {
    name:   String,
    time:   u8
}

#[post("/task", data="<task>")]
fn task(task: Form<Task>) -> String {
    let mut ret = String::new();
    ret.push_str(&format!("A new task named {} needs to be finished in {} hr", task.name, task.time));
    return ret;
}

fn main() {
    rocket::ignite().mount("/", routes![index, hello, task]).launch();
}
