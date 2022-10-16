---
sidebar_position: 1
---
### 组件介绍
**“频繁项集”（Frequent Itemsets）** 控件基于支持度度量规则找出数据集中的频繁项集。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：符合判定条件的数据示例

<hr/>

### 页面介绍
点击**“频繁项集”（Frequent Itemsets）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/associate/frequent-itemsets/param.png) ](/img/aistudio/associate/frequent-itemsets/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>查找项集</td> 
      <td>
      用户可以通过设置项集搜索的条件查找项集：<br/>
      &emsp;&emsp;最小支持度：所要生成的项集在数据集中的最小占比。对于大型数据集而言，一般该值设置为一个较小的数目，如2%~0.01%。<br/>
      &emsp;&emsp;最大项集数：设置项集数的上限。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>过滤项集</td>    
      <td>
      过滤项集：为用户提供用来过滤项集的正则表达式匹配操作。需要匹配多个词时，可以用逗号将各个正则表达式分隔开。<br/>
      &emsp;&emsp;包含：通过正则表达式来过滤项集。<br/>
      &emsp;&emsp;最小层级：项集中必须出现的最小项数。如果为1，将显示所有项集。<br/>
      &emsp;&emsp;最大层级：项集中出现的最大项数。即如果想要查找具有少于 5 个项的项集，可将该参数设置为 5。
      </td> 
      <td></td>
  </tr>
</table>

#### 频繁项集表
设置参数后，点击“查找项集”按钮，即可根据当前指定设置查找满足过条件的项集树。 
[ ![](/img/aistudio/associate/frequent-itemsets/interaction.png) ](/img/aistudio/associate/frequent-itemsets/interaction.png)

该表包含以下列：
<table>
  <tr>
    <th>列名</th>
    <th width="650">说明</th>
  </tr>
  <tr>
      <td>项集</td> 
      <td>
      关联项集信息
      </td> 
  </tr>
  <tr>
      <td>支持度</td>    
      <td>
      所生成的项集包含的实例数
      </td> 
  </tr>
  <tr>
      <td>%</td> 
      <td>
      所生成的项集在数据集中的占比
      </td> 
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“文件加载”（File）**控件加载数据，使用**“查看数据”（Data Table）**控件查看数据集内容，通过**“频繁项集”（Frequent Itemsets）**查找满足条件的项集。  
[ ![](/img/aistudio/associate/frequent-itemsets/workflow.png) ](/img/aistudio/associate/frequent-itemsets/workflow.png)

案例中加载 titanic 示例数据集，案例中控件执行结果如下图所示：  
[ ![](/img/aistudio/associate/frequent-itemsets/workflow-result.png) ](/img/aistudio/associate/frequent-itemsets/workflow-result.png)
