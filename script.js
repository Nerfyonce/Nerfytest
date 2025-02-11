// API 1: Welcome Gold
document.getElementById('voucherForm1').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber1').value;
    const apiUrl = `https://api.teeg.cloud/vouchers/campaigns/RIXI59A/cards/${cardNumber}?tz=MIDQRS5R5K`;
    const bearerToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI2MjUzODc3LCJuYmYiOjE3MjYyNTI5NzcsImlwQWRkcmVzcyI6IjE4MC4yNDguMTYuMTE5IiwiaXBhZGRyIjoiMTgwLjI0OC4xNi4xMTkiLCJvaWQiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJzdWIiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJwaG9uZSI6Iis2MjgyMTMxMTA2NjA3IiwidGlkIjoiYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwIiwibm9uY2UiOiI1NDlmNDdhMy03NDc3LTQzYTUtODFiOC04YmQzYzdiZmUzZWQiLCJzY3AiOiJhbGwtYXBpcyIsImF6cCI6ImNhMGU0ODY4LTE3N2ItNDlkMi04YzYzLWYxMDQ0ZTNlZGM2MyIsInZlciI6IjEuMCIsImlhdCI6MTcyNjI1Mjk3N30.wxQh5SUok0V-0bmVQrE2lFK5H90spqR55WNGR49bbamX9PQJx8jk8jyclSAjytdaJxGlwZCxzMr7DlXMuCBcj2QMLx6OXx4a_WyOUQ6M7YDR7j_WpL-gPzzRfJU7u8wguI_we13YF8g-yioVDEmXOaCnoYRN_k2FHpwlD7qkUSq3-3AHMl34PG1-TisSN9Hj7bNF-_s8ZXsSR-phBk4g7vsHw0-AodURtJK6DWo_VUMag3nfBSXi2bDlhCXuRUyZvnzao1QT91yfoaYDw7Z_BwPXLzyg2a75LNRg-CJfb7wCDLrXaNaN8-DvC4W-ZI78U86SR6iAzcwTKFTdUbnX0g';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result1').innerText = `Voucher Code: ${data.voucherCode}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result1').innerText = 'Failed to generate voucher. Please try again.';
    });
});

// API 2: Gold Accumulate 4jt
document.getElementById('voucherForm2').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber2').value;
    const apiUrl = `https://api.teeg.cloud/vouchers/campaigns/Y4EHNWC/cards/${cardNumber}?tz=MID24IKJ5I`;
    const bearerToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzE5Njg0MDI5LCJuYmYiOjE3MTk2ODMxMjksImlwQWRkcmVzcyI6IjEwNC4yOC4yMTUuMTM1Iiwib2lkIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2Iiwic3ViIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2IiwicGhvbmUiOiIrNjI4MjE0NzI2ODU3MCIsInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiNDY0Nzg5OTctOGMyOS00ZDZlLWJiYzEtMWNmMWM0ODU0ZTFiIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MTk2ODMxMjl9.oBGoT48XCbhMEogA-5Lgb2uke_iE4bTcLlCRqxwVX5GzbudDbiRt_6Ic77mVV5KV6aKw5uneJyKjJ-9OxHozTrDOPk151daV88spB5V8t3gjMDC_uIuTaEQHmWhHETr3YVy_R8ycHPIKhdnKwisIZs4dfW4Wj78iHLgHXadeVN0joggAJnWtozsfRUpnD0jL1tBOsFmdxhMXdXVFKNkq_B6hJ4qHlq2zP2GMQB3zst_XvlacVG2SxNaNnafcb0QY0y1oJgVz_fo81xGI0aZb2AGSVEAd0QvFYDzx2vst-w4Oz_YdcVppAsr3mRP7-cyU-BPHk6-bPviA7mGJyuyzOA';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result2').innerText = `Voucher Code: ${data.voucherCode}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result2').innerText = 'Failed to generate voucher. Please try again.';
    });
});

// API 3: Gold Accumulate 6jt
document.getElementById('voucherForm3').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber3').value;
    const apiUrl = `https://api.teeg.cloud/vouchers/campaigns/NCSMYMT/cards/${cardNumber}?tz=MIDKNJFK4G`;
    const bearerToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzE5Njg1NDg4LCJuYmYiOjE3MTk2ODQ1ODgsImlwQWRkcmVzcyI6IjEwNC4yOC4yMTUuMTM1Iiwib2lkIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2Iiwic3ViIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2IiwicGhvbmUiOiIrNjI4MjE0NzI2ODU3MCIsInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiNDY0Nzg5OTctOGMyOS00ZDZlLWJiYzEtMWNmMWM0ODU0ZTFiIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MTk2ODQ1ODh9.uyZmrVyE2y73V7zK37-8dVgZq865C2cnc48M2KCaqZ2PPPnIz29b7LCKbbI5GtkJWMJDAZsAGrLQsDgXEMlhLeZ7LRgM9OuhWl1vviT1SKnsJFkcBzuWovYPFixbx1HcpqNfuCyY4FzynR_vzpJZ_bNLUv4M8niDaXIGsf7F0DS-8I4qh_Gmiz-dtM07cBCAmnC3XD2p3akhp5dO7dNzSgl_pmeIxM3gFBravayltxwsoIUjkeSQ1_XlBaMMuxDexHlSBMPtuNM1RiRlvepifNATU-t0a_BhedvPslrwImnisYS6DZxqRG5FLNEx6I7WH40hwQ3uimtKYxlYt1kr3g';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result3').innerText = `Voucher Code: ${data.voucherCode}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result3').innerText = 'Failed to generate voucher. Please try again.';
    });
});