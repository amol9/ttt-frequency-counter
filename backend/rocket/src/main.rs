#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate reqwest;
extern crate futures;

#[allow(dead_code, unused_attributes, unused_must_use, unused_variables)]
mod server;
mod count;

fn main() {
    count::main();
}