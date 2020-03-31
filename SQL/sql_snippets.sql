where j.schedtime between cast('2019-10-01' as Date) and cast('2020-2-11' as Date)

and j.schedtime > dateadd(d,-30,getdate())



<!--finance--!>
f.emailaddress as emailaddress,
...
left join "FinanceBilling" f
on f.ClientID = se.subscriberkey






holy shit


select
j.jobID,
j.emailName as emailname,
se.eventdate as sendtime,
o.eventdate as opentime,
c.eventdate as clicktime,
bo.eventdate as bouncetime,
u.eventdate as unsubscribetime,
se.subscriberkey
from _job j
left join _sent se
on j.JobID = se.JobID
left join _open o
on se.JobID = o.JobID and se.ListID = o.ListID and se.BatchID = o.BatchID and se.SubscriberID = o.SubscriberID and o.IsUnique = 1
left join _click c
on se.JobID = c.JobID and se.ListID = c.ListID and se.BatchID = c.BatchID and se.SubscriberID = c.SubscriberID and c.IsUnique = 1
left join _bounce bo
on se.JobID = bo.JobID and se.ListID = bo.ListID and se.BatchID = bo.BatchID and se.SubscriberID = bo.SubscriberID and bo.IsUnique = 1
left join _unsubscribe u
on se.JobID = u.JobID and se.ListID = u.ListID and se.BatchID = u.BatchID and se.SubscriberID = u.SubscriberID and u.IsUnique = 1
where se.eventdate > dateadd(d,-30,getdate())
and j.emailID in (
143083
)



select
j.jobID,
j.emailName as emailname,
se.eventdate as sendtime,
o.eventdate as opentime,
c.eventdate as clicktime,
bo.eventdate as bouncetime,
u.eventdate as unsubscribetime,
se.subscriberkey,
p.emailaddress as emailaddress
from _job j
left join _sent se
on j.JobID = se.JobID
left join _open o
on se.JobID = o.JobID and se.ListID = o.ListID and se.BatchID = o.BatchID and se.SubscriberID = o.SubscriberID and o.IsUnique = 1
left join _click c
on se.JobID = c.JobID and se.ListID = c.ListID and se.BatchID = c.BatchID and se.SubscriberID = c.SubscriberID and c.IsUnique = 1
left join _bounce bo
on se.JobID = bo.JobID and se.ListID = bo.ListID and se.BatchID = bo.BatchID and se.SubscriberID = bo.SubscriberID and bo.IsUnique = 1
left join _unsubscribe u
on se.JobID = u.JobID and se.ListID = u.ListID and se.BatchID = u.BatchID and se.SubscriberID = u.SubscriberID and u.IsUnique = 1
left join "Provisioning" p
on p.ClientID = se.subscriberkey
where se.eventdate > dateadd(d,-30,getdate())
and j.emailID in (
140316,
140330,
140332,
140333
)