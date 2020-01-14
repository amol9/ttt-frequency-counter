
use futures::executor::block_on;
//use std::io::Read;

async fn get_remote_file(url: &str) -> Result<(), reqwest::Error> {
    let res = reqwest::get(url).await?;
    let body = res.text().await?;

    //println!("Status: {}", res.status());
    //println!("Headers:\n{:#?}", res.headers());
    println!("Body:\n{}", body);

    //return Ok(body);
    Ok(())
}

async fn call() {
    get_remote_file("https://terriblytinytales.com/test.txt").await.unwrap();
}
pub fn main() {
    block_on(call());
}